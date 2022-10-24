Rails.application.routes.draw do
  
  resources :requested_items
  resources :items

  get"/items", to: "items#index"
  post"/items", to: "items#create"

  get"/requests", to: "requested_items#index"
  post"/requests", to: "requested_items#create"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
