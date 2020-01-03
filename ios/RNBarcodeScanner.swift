//
//  RNBarcodeScanner.swift
//  libraphry
//
//  Created by Antonio Moreno Valls on 29/12/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import AVFoundation
import Firebase

class PreviewView: UIView {
    override class var layerClass: AnyClass {
        return AVCaptureVideoPreviewLayer.self
    }
    
    /// Convenience wrapper to get layer as its statically known type.
    var videoPreviewLayer: AVCaptureVideoPreviewLayer {
        return layer as! AVCaptureVideoPreviewLayer
    }
}

@objc(RNBarcodeScanner)
class RNBarcodeScanner : UIView, AVCaptureVideoDataOutputSampleBufferDelegate {
  var previewView = PreviewView()
  var captureSession: AVCaptureSession
  var onBarcodeScanned: RCTBubblingEventBlock?
  
  /// Related to Google MLKit library
  lazy var vision = Vision.vision()
  var barcodeDetector :VisionBarcodeDetector?
  
  override init(frame: CGRect) {
    captureSession = AVCaptureSession()
    
    super.init(frame: frame)
    self.frame = frame
    
    captureSession.beginConfiguration()
    let videoDevice = AVCaptureDevice.default(.builtInWideAngleCamera,
                                              for: AVMediaType.video, position: .back)
    guard
        let videoDeviceInput = try? AVCaptureDeviceInput(device: videoDevice!),
        captureSession.canAddInput(videoDeviceInput)
        else {
          return
    }
    captureSession.addInput(videoDeviceInput)
    
    let photoOutput = AVCapturePhotoOutput()
    guard captureSession.canAddOutput(photoOutput) else {
      return
      
    }

    previewView.videoPreviewLayer.session = captureSession
    
    let deviceOutput = AVCaptureVideoDataOutput()
    deviceOutput.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String: Int(kCVPixelFormatType_32BGRA)]
    deviceOutput.setSampleBufferDelegate(self, queue: DispatchQueue.global(qos: DispatchQoS.QoSClass.default))
    captureSession.addOutput(deviceOutput)
    
    captureSession.commitConfiguration()
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    
    // Camera preview
    self.previewView.frame = self.bounds
    self.addSubview(self.previewView)
  
    captureSession.startRunning()
    
    self.barcodeDetector = vision.barcodeDetector()
  }
    
  deinit {
    self.captureSession.stopRunning()
  }
  
  @objc(setOnBarcodeScanned:)
  func setOnBarcodeScanned(onBarcodeScanned: @escaping RCTBubblingEventBlock) {
    self.onBarcodeScanned = onBarcodeScanned
  }
  
  internal func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {

      if let barcodeDetector = self.barcodeDetector {
          let visionImage = VisionImage(buffer: sampleBuffer)

          barcodeDetector.detect(in: visionImage) { (barcodes, error) in

              if let error = error {
                print(error.localizedDescription)
                return
              }

            self.onBarcodeScanned!(["code": barcodes!.first?.rawValue! ?? ""])
            
            if (barcodes!.first?.rawValue! != nil) {
              // Stop the session if we find the barcode
              self.captureSession.stopRunning()
            }
          }
      }
  }
}
