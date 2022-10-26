Rails.application.routes.draw do
  
  resources :clerks, only: [:index, :show, :create, :update, :destroy ]
  resources :requested_items
  resources :items

  # get"/clerks", to: "clerks#index"
  # get"/clerks/:do", to: "clerks#show"
  # post"/clerks", to: "clerks#create"
  # delete"/clerks/:id", to: "clerks#destroy"

  get"/items", to: "items#index"
  post"/items", to: "items#create"
  delete"/items/:id", to: "items#destroy"

  get"/requests", to: "requested_items#index"
  post"/requests", to: "requested_items#create"
  delete"/requests/:id", to: "requested_items#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
