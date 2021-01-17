# React Tube App

This is a project for It Academy - React module 9.

Get a look a quick overview of the final result:
 [https://github.com/ingridinara/rm9/blob/827ab5e0d5959bfb05b03d4a1d804f7eafe2c615/ReactTube.png]


Bellow you can see a description of each commit:

## initialCommit

Basic structure was created through CLI - (npx create-react-app) and installation of axios package to use API (npm install axios).

## api folder & appComponent 

An api folder was created with the key to fetch the api data.
As well as the App component. 

In order to better understand the code on the App component, you
can take into account that "q" is an axios parameter, in which 
we add the term that we will use for searching in the app.
 
## searchBarComponent

This component includes the form with its tags for searching.
It uses two methods which are updated by events.

## videoListComponent

On this component there is a props destructuring and 
mapping so we could access the list of the videos

## videoItemComponent

We access the snippet information and structure a video item
with it's features such as description and title.

## videoDetailComponent

Its the component that will render the selected video with 
more information and in a bigger size

 

