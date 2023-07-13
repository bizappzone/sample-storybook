# Min repo for published packages 'rootDir' error

Packages:

UiBase - publishable lib
UiForms - publishable lib

## Dependancies

Lib - UiBase is imported into UiForms

## Building...

nx run ui-base:build:production - works fine
nx run ui-forms:build:production - gives error - is not under 'rootDir'

## The UiBase package should be prebuilt and trated like any published lib

Importing a published lib into a new published lib (dependancy) should not produce error.
