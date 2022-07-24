export enum eventTypes {
  buttonPress = 'Button press',
  flip = 'Card flip',
  typing = 'Typing',
  networkEvent = 'Network event',
}

export enum landingEvents {
  cardOfTheDay = 'Pressed Card of the Day button',
  chooseASpread = 'Pressed Choose a Spread button',
  personalCard = 'Pressed Personal Card button',
  screenName = 'Landing Page',
}

export enum personalCardEvents {
  flip = 'Flipped personal card',
  instagram = 'Pressed personal card Instagram share button',
  generalShare = 'Pressed personal card general share button',
  screenName = 'Personal Card',
  backButton = 'Pressed Personal Card back button',
}

export enum spreadEvents {
  backButton = 'Pressed Spreads back button',
  screenName = 'Spreads',
}

export enum dailyReadingEvents {
  flip = 'Flipped daily card',
  shareButton = 'Pressed Daily Reading share button',
  screenName = 'Daily Reading',
  backButton = 'Pressed Daily Reading back button',
}

export enum shareModalEvents {
  instagram = 'Pressed Instagram share button',
  general = 'Pressed general share button',
  screenName = 'Share Modal',
  exitButton = 'Pressed Share Modal exit button',
}

export enum readingEvents {
  screenName = 'Reading',
  backButton = 'Pressed Reading back button',
  flip = 'Flipped reading card',
}

export enum libraryIndexEvents {
  screenName = 'Library Index',
}

export enum suitsEvents {
  screenName = 'Suits',
  backButton = 'Pressed Library - Suits back button',
  expandButton = 'Pressed expand suit - ',
  cardDetails = 'Navigated to card details from Suits',
}

export enum majorArcanaEvents {
  screenName = 'Major Arcana',
  backButton = 'Pressed Major Arcana back button',
  searchBar = 'Typed in Major Arcana search bar',
  cardDetails = 'Navigated to card details from Major Arcana',
}

export enum minorArcanaEvents {
  screenName = 'Minor Arcana',
  backButton = 'Pressed Minor Arcana back button',
  searchBar = 'Typed in Minor Arcana search bar',
  cardDetails = 'Navigated to card details from Minor Arcana',
}

export enum allCardsEvents {
  screenName = 'All Cards',
  backButton = 'Pressed All Cards back button',
  searchBar = 'Typed in All Cards search bar',
  cardDetails = 'Navigated to card details from All Cards',
}

export enum historyEvents {
  screenName = 'History',
  date = 'Pressed date',
}

export enum historyDetailsEvents {
  screenName = 'History Details',
  backButton = 'Pressed History Details back button',
  selectReading = 'Navigated to historical',
}

export enum cardDetailsEvents {
  screenName = 'Card Details',
  backButton = 'Pressed Card Details back button',
  selectTab = 'Selected Card Details tab -',
}

export enum profileEvents {
  screenName = 'Profile',
  mostFrequentlyDrawnCard = 'Navigated to most frequently drawn card',
  logout = 'Pressed logout button',
  settings = 'Pressed settings button',
}

export enum settingsEvents {
  screenName = 'Settings',
  changePassword = 'Pressed change password button',
  saveEditedInfo = 'Pressed save edited',
}

export enum changePasswordEvents {
  screenName = 'Change password',
  updatePassword = 'Pressed update password button',
  backButton = 'Pressed Change Password back button',
}

export enum signInEvents {
  screenName = 'Sign In',
  loginPersisted = 'Login automatically persisted',
  loginButton = 'Pressed login button',
  forgotPassword = 'Pressed forgot password button',
  register = 'Pressed navigate to Registration button',
}

export enum registrationEvents {
  screenName = 'Registration',
  signUp = 'Pressed Sign Up button',
  signIn = 'Pressed Sign In button',
}

export enum resetPasswordEvents {
  update = 'Password reset and update button pressed',
  screenName = 'Reset Password',
}
