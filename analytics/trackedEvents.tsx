export enum eventTypes {
  buttonPress = 'Button press',
  flip = 'Card flip',
  typing = 'Typing',
}

export enum landingEvents {
  cardOfTheDay = 'Card of the Day',
  chooseASpread = 'Choose a Spread',
  personalCard = 'Personal Card',
  screenName = 'Landing Page',
}

export enum personalCardEvents {
  flip = 'Flip personal card',
  instagram = 'Instagram personal card',
  generalShare = 'General share personal card',
  screenName = 'Personal Card',
  backButton = 'Personal Card back button',
}

export enum spreadEvents {
  backButton = 'Back Button spreads',
  screenName = 'Spreads',
}

export enum dailyReadingEvents {
  flip = 'Flip daily card',
  shareButton = 'Daily Reading share button',
  screenName = 'Daily Reading',
  backButton = 'Daily Reading back button',
}

export enum shareModalEvents {
  instagram = 'Instagram share',
  general = 'General share',
  screenName = 'Share Modal',
  exitButton = 'Share Modal exit button',
}

export enum readingEvents {
  screenName = 'Reading',
  backButton = 'Reading back button',
  flip = 'Flip reading card',
}

export enum libraryIndexEvents {
  screenName = 'Library Index',
}

export enum suitsEvents {
  screenName = 'Suits',
  backButton = 'Library - Suits back button',
  expandButton = 'Expand suit - ',
  cardDetails = 'Navigate to card details from Suits',
}

export enum majorArcanaEvents {
  screenName = 'Major Arcana',
  backButton = 'Major Arcana back button',
  searchBar = 'Major Arcana search bar',
  cardDetails = 'Navigate to card details from Major Arcana',
}

export enum minorArcanaEvents {
  screenName = 'Minor Arcana',
  backButton = 'Minor Arcana back button',
  searchBar = 'Minor Arcana search bar',
  cardDetails = 'Navigate to card details from Minor Arcana',
}

export enum cardDetailsEvents {
  screenName = 'Card Details',
  backButton = 'Card Details back button',
  selectTab = 'Select Card Details tab -',
}
