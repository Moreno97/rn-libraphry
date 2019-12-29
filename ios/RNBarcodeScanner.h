//
//  RNBarcodeScanner.h
//  libraphry
//
//  Created by Antonio Moreno Valls on 29/12/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#ifndef RNBarcodeScanner_h
#define RNBarcodeScanner_h

@interface RNBarcodeScanner : RCTView
@property (nonatomic, copy) RCTBubblingEventBlock onBarcodeScanned;

#endif /* RNBarcodeScanner_h */
