Rails.application.routes.draw do
  
  resources :users, param: :_email
  resources :stores, only: [:create, :index, :update, :destroy]
  resources :merchant_users
  resources :admins, only: [:create, :index, :update, :destroy]
  post "/signup",  to: "users#create"
  get "/me", to: "merchantusers#show"
  post "/login", to: "merchantsessions#create"
  delete "/logout", to: "mechantsessions#destroy"

  resources :clerks, only: [:index, :show, :create, :update, :destroy ]
  resources :requested_items
  resources :items
  resources :requested_items

  # get"/items", to: "items#index"
  # post"/items", to: "items#create"
  # delete"/items/:id", to: "items#destroy"

  # get"/requests", to: "requested_items#index"
  # post"/requests", to: "requested_items#create"
  # delete"/requests/:id", to: "requested_items#destroy"
  # get"/clerks", to: "clerks#index"
  # get"/clerks/:do", to: "clerks#show"
  # post"/clerks", to: "clerks#create"
  # delete"/clerks/:id", to: "clerks#destroy"

  get"/items", to: "items#index"
  post"/items", to: "items#create"
  delete"/items/:id", to: "items#destroy"

  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'

  post '/create_admin', to: 'user#create_admin'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
