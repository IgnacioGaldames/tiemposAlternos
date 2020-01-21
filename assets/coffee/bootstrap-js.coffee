# Grab a loading screen lock
lsLockBootstrap = LoadScreen.lock()
# Import a script while using the returned Promise to ensure that
# the script has been fully loaded before executing dependent code
bootstrapJs = [
    "https://code.jquery.com/jquery-3.4.1.min.js"
    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
]
importScripts(bootstrapJs).then(->
  # Code that depends on the script goes here.
  LoadScreen.unlock lsLockBootstrap
  moment.locale 'es'
  if env == 'staging'
    console.log 'Bootstrap js cargado'
  return
).catch (err) ->
  # There was an error loading the script, log it to the console.
  console.log err
  return