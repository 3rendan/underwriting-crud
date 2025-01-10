# Todo

1. AuthContext
   1. pass bearer token to ProgramsContext so it can make a fetch
      1. evaluate token to see if it's still valid, if not
         1. make another auth request and then make a fetch
