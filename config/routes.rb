Rails.application.routes.draw do
  
  resources :items
  resources :requested_items

  # get"/items", to: "items#index"
  # post"/items", to: "items#create"
  # delete"/items/:id", to: "items#destroy"

  # get"/requests", to: "requested_items#index"
  # post"/requests", to: "requested_items#create"
  # delete"/requests/:id", to: "requested_items#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
