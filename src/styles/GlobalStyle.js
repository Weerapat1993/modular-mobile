import BaseStyle from './Style/BaseStyle'
import { Colors } from './Theme'

/**
 * @class GlobalStyle
 * @extends BaseStyle
 * @example
 * // Size
 * styles.center
 * styles.size(20) // Square
 * styles.size(20, 30) // Rectangle
 * styles.circle(20)
 * 
 * // Text
 * styles.textColor(14, '#2cd5df')
 * styles.textColorBold(14, '#2cd5df')
 * styles.textDefault(14)
 * styles.textDefaultBold(14)
 * styles.textPrimary(14)
 * styles.textPrimaryBold(14)
 * styles.textWarning(14)
 * styles.textWarningBold(14)
 * styles.textDanger(14)
 * styles.textDangerBold(14)
 * styles.textSuccess(14)
 * styles.textSuccessBold(14)
 * styles.textMute(14)
 * styles.textMuteBold(14)
 * 
 * // Background
 * styles.bgDefault
 * styles.bgPrimary
 * styles.bgWarning
 * styles.bgDanger
 * styles.bgSuccess
 * styles.bgMute
 */
class GlobalStyle extends BaseStyle {
  center = {
    justifyContent: 'center',
    alignItems: 'center',
  }

  // Size
  size = (width, height) => ({
    width,
    height: height || width,
  })
  circle(value) {
    return {
      ...this.size(value),
      borderRadius: value / 2,
    }
  }

  // Font Styles
  textColor = (size, color) => ({
    fontSize: size || 14,
    color,
  })
  textColorBold = (size, color) => ({
    fontSize: size || 14,
    fontWeight: 'bold',
    color,
  })

  // Text
  textDefault(size) { return this.textColor(size, Colors.DEFAULT) }
  textDefaultBold(size) { return this.textColorBold(size, Colors.DEFAULT) }
  textPrimary(size) { return this.textColor(size, Colors.PRIMARY) }
  textPrimaryBold(size) { return this.textColorBold(size, Colors.PRIMARY) }
  textWarning(size) { return this.textColor(size, Colors.WARNING) }
  textWarningBold(size) { return this.textColorBold(size, Colors.WARNING) }
  textSuccess(size) { return this.textColor(size, Colors.SUCCESS) }
  textSuccessBold(size) { return this.textColorBold(size, Colors.SUCCESS) }
  textDanger(size) { return this.textColor(size, Colors.DANGER) }
  textDangerBold(size) { return this.textColorBold(size, Colors.DANGER) }
  textMute(size) { return this.textColor(size, Colors.DISABLE) }
  textMuteBold(size) { return this.textColorBold(size, Colors.DISABLE) }

  // BackgroundColor
  bgDefault = { backgroundColor: Colors.DEFAULT }
  bgPrimary = { backgroundColor: Colors.PRIMARY }
  bgSuccess = { backgroundColor: Colors.SUCCESS }
  bgDanger = { backgroundColor: Colors.DANGER }
  bgWarning = { backgroundColor: Colors.WARNING }
  bgMute = { backgroundColor: Colors.DISABLE }


  // Border
  lineTop = value => ({
    borderTopColor: Colors.BORDER_COLOR,
    borderTopWidth: value,
  })
  lineBottom = value => ({
    borderBottomColor: Colors.BORDER_COLOR,
    borderBottomWidth: value,
  })
}

export default GlobalStyle