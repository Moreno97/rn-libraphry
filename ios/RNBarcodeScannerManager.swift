//
//  RNBarcodeScannerManager.swift
//  libraphry
//
//  Created by Antonio Moreno Valls on 29/12/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(RNBarcodeScannerManager)
class RNBarcodeScannerManager: RCTViewManager {

  // Return the native view that represents your React component
  override func view() -> UIView! {
    return RNBarcodeScanner()
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
