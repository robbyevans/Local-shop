Rails.application.routes.draw do
  
  resources :merchant_users
  resources :admins, only: [:create, :index, :update, :destroy]
  post "/signup",  to: "merchantusers#create"
  get "/me", to: "merchantusers#show"
  post "/login", to: "merchantsessions#create"
  delete "/logout", to: "mechantsessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
