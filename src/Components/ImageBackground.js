
'use strict';

const Image = require('Image');
const React = require('React');
const StyleSheet = require('StyleSheet');
const View = require('View');

const ensureComponentIsNative = require('ensureComponentIsNative');


export default class ImageBackground extends React.Component<$FlowFixMeProps> {
  setNativeProps(props: Object) {
    // Work-around flow
    const viewRef = this._viewRef;
    if (viewRef) {
      ensureComponentIsNative(viewRef);
      viewRef.setNativeProps(props);
    }
  }

  _viewRef: ?React.ElementRef<typeof View> = null;

  _captureRef = ref => {
    this._viewRef = ref;
  };

  render() {
    const {children, style, imageStyle, imageRef, ...props} = this.props;

    return (
      <View style={style} ref={this._captureRef}>
        <Image
          {...props}
          style={[this.props.tintStyle.houseCrest , StyleSheet.absoluteFill, { width: style.width,height: style.height,}]}
          ref={imageRef}
        />
        {children}
      </View>
    );
  }
}

//,  , imageStyle
// {tintColor:'#D3D3D3'}