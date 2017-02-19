package com.festival;

import android.app.Application;
import android.util.Log;
import android.support.annotation.Nullable;

import com.facebook.react.ReactApplication;
import com.sbugert.rnadmob.RNAdMobPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import com.reactnativenavigation.NavigationApplication;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
         return Arrays.<ReactPackage>asList(
                            new MapsPackage(),
                            new RNFetchBlobPackage(),
                            new ImageResizerPackage(),
                            new RCTCameraPackage(),
                            new RNDeviceInfo(),
                            new VectorIconsPackage()
                      );
    }
}


