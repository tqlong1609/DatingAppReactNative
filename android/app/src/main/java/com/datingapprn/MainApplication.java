package com.datingapprn;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.zoontek.rnpermissions.RNPermissionsPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import io.github.elyx0.reactnativedocumentpicker.DocumentPickerPackage;
import com.imagepicker.ImagePickerPackage;
import com.reactnativecommunity.slider.ReactSliderPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import ca.jaysoo.extradimensions.ExtraDimensionsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.wix.interactable.Interactable;
import com.airbnb.android.react.lottie.LottiePackage;
import com.reactcommunity.rndatetimepicker.RNDateTimePickerPackage;

import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; 
import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage;
import com.facebook.react.bridge.JSIModulePackage; // <- add
import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
// import co.apptailor.googlesignin.RNGoogleSigninPackage;
// import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
// import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// import com.reactcommunity.rnlocalize.RNLocalizePackage;
// import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
// import com.horcrux.svg.SvgPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
          @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          packages.add(new LottiePackage());
          packages.add(new Interactable()); 
          packages.add(new LinearGradientPackage()); 
          packages.add(new RNFirebaseMessagingPackage()); //add this
           packages.add(new RNFirebaseNotificationsPackage()); //add this
          //  packages.add(new RNGoogleSigninPackage()); //add this

           
          // packages.add(new ReactNativePushNotificationPackage()); 
          // packages.add(new AsyncStoragePackage());
          // packages.add(new RNLocalizePackage());
          // packages.add(new ReactNativeFirebaseAppPackage()); 
          // packages.add(new RNDateTimePickerPackage());
          // packages.add(new ExtraDimensionsPackage()); 
          // packages.add(new SvgPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
        @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
      }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    // initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.datingapprn.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
