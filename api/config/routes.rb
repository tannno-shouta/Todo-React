Rails.application.routes.draw do

  root to: "todos#index"
  post '/' , to:"todos#create"
  delete '/' , to:"todos#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
