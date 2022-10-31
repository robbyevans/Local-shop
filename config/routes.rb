Rails.application.routes.draw do
  
  resources :users, param: :_email
  resources :stores, only: [:create, :index,:show, :update, :destroy]
  resources :merchant_users
  resources :admins, only: [:create, :index, :show,:update, :destroy]
  
  post "/signup",  to: "users#create"

  resources :clerks, only: [:index, :show, :create, :update, :destroy ]
  resources :requested_items
  resources :items

  
  # get"/items", to: "items#index"
  # post"/items", to: "items#create"
  # delete"/items/:id", to: "items#destroy"

  post '/admin/login', to: 'admins#admin_login'

  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'

  post '/create_admin', to: 'users#create_admin'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
