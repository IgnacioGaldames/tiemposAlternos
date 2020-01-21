# Grab a loading screen lock
lsLockCSS = LoadScreen.lock();
# Import a stylesheet while using the returned Promise to ensure that the
# stylesheet has been fully loaded before unlocking the loading screen
googlefontURL = "https://fonts.googleapis.com/css?family="
googleFonts = [
  googlefontURL + "Source+Code+Pro:200,400,900&display=swap"
  googlefontURL + "Satisfy&display=swap"
  ]
importStyles(googleFonts).then(->
  # Code that depends on the script goes here.
  LoadScreen.unlock lsLockCSS
  if env == 'staging'
    console.log 'Google Fonts cargados'
    console.log googleFont for googleFont in googleFonts 
  return
).catch (err) ->
  # There was an error loading the script, log it to the console.
  console.log err
  return