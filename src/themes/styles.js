import * as Const from './const'
import * as Colors from './colors'

export const TextInput = {
    borderWidth: 1,
    marginHorizontal: Const.MARGIN_HORIZONTAL,
    height: Const.HEIGHT,
    // height: 50,
    paddingLeft: Const.PADDING_TEXT_INPUT,
    borderRadius: Const.BORDER_RADIUS,
}

export const Button = {
    marginHorizontal: Const.MARGIN_HORIZONTAL,
    height: Const.HEIGHT,
    justifyContent: 'center',
    borderRadius: Const.BORDER_RADIUS,
}

export const ButtonBottom = {
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 25,
}

export const txtTitle = {
    fontSize: Const.FONT_SIZE_V1,
    fontWeight: 'bold',
    color: Colors.GRAY_BRIGHT,
    marginTop: Const.MARGIN_TOP_V1
}

export const txtTitle2 = {
    fontSize: Const.FONT_SIZE_V1,
    fontWeight: 'bold',
    color: Colors.PINK_DARK,
    marginBottom: Const.MARGIN_TOP_V1
}

export const txtDetail = {
    fontSize: Const.FONT_SIZE,
    marginTop: 15,
    color: Colors.GRAY_BRIGHT_I
}

export const ButtonBottomNext = {
    backgroundColor: Colors.GRAY_BRIGHT_I,
    width: Const.BUTTON_NEXT,
    height: Const.BUTTON_NEXT,
    borderRadius: Const.BUTTON_NEXT / 2,
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20
}

export const IconBack = {
    width: 30,
    margin: 5
}

export const IconSkip = {
    position: 'absolute',
    right: 10,
    top: 10
}

export const Title = {
    color: Colors.PINK,
    fontWeight: 'bold',
    fontSize: Const.FONT_SIZE_V1,
    marginLeft: 20
}

export const TextButton = {
    alignSelf: 'center',
    color: 'white',
    fontSize: Const.FONT_SIZE
}

export const TextButtonBottom = {
    alignSelf: 'center',
    color: Colors.BLUE_BRIGHT,
    fontSize: Const.FONT_SIZE,
    fontWeight: 'bold'
}