Rails.application.routes.draw do
  
  resources :requested_items
  resources :items

  get"/items", to: "items#index"
  post"/items", to: "items#create"
  delete"/items/:id", to: "items#destroy"

  get"/requests", to: "requested_items#index"
  post"/requests", to: "requested_items#create"
  delete"/requests/:id", to: "requested_items#destroy"
  resources :users
  resources :stores
  resources :merchant_users
  resources :admins, only: [:create, :index, :update, :destroy]
  post "/signup",  to: "merchantusers#create"
  get "/me", to: "merchantusers#show"
  post "/login", to: "merchantsessions#create"
  delete "/logout", to: "mechantsessions#destroy"


  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
