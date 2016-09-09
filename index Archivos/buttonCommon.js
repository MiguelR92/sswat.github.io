define("buttonCommon/mixins/buttonMixin",["lodash","santaProps","utils","textCommon"],function(a,b,c,d){"use strict";function e(a){var b={};if("center"!==a.compProp.align){var d="margin"+(a.compProp.align?c.stringUtils.capitalize(a.compProp.align):"");b[d]=a.compProp.margin}return b}function f(a){var b={};return""!==a.compProp.padding&&(b.padding=a.compProp.padding),b}function g(){return this.shouldRecalculateLineHeight?{lineHeight:""}:{}}var h={propTypes:{compData:b.Types.Component.compData,compProp:b.Types.Component.compProp,compTheme:b.Types.Component.theme},mixins:[d.textScaleMixin],componentWillMount:function(){this.currentStyle=this.santaTypesProps.theme,this.currentScale=a.get(this,"props.structure.layout.scale",1)},componentWillReceiveProps:function(){var b=this.nextSantaTypesProps.theme,c=a.get(this.nextSantaTypesProps,"structure.layout.scale",1);a.isEqual(this.currentStyle,b)&&this.currentScale===c||(this.shouldRecalculateLineHeight=!0),this.currentStyle=b,this.currentScale=c},componentDidUpdate:function(){this.shouldRecalculateLineHeight&&(this.shouldRecalculateLineHeight=!1)},resetMinHeightIfNeeded:function(a){this.shouldRecalculateLineHeight&&(a[""]=a[""]||{},a[""].style=a[""].style||{},a[""].style.minHeight="")},getLabelStyle:function(){return a.merge(e(this.santaTypesProps),f(this.santaTypesProps),this.getFontSize(),g.call(this))}};return h}),define("buttonCommon",["buttonCommon/mixins/buttonMixin"],function(a){"use strict";return{buttonMixin:a}});