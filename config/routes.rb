Rails.application.routes.draw do
  
  resources :users, only: [:create, :show, :index]
  resources :stores, only: [:create, :index,:show, :update, :destroy]
  resources :merchant_users
  resources :admins, only: [:create, :index, :show,:update, :destroy]
  
  resources :stores, only: [:create, :index,:show, :update, :destroy]
  resources :requested_items
  resources :items


 # merchant/user sign in routes

 resources :users
 post "/signup",  to: "users#create"
 post '/auth/login', to: 'authentication#login'


  # clerk sign in routes

  resources :clerks, only: [:index, :show, :create, :update, :destroy ]
  post '/clerk/login', to: 'clerk#clerk_login'
  delete 'clerk/logout', to: 'sessions#destroy'

  
 # admin sign in routes

 resources :admins, only: [:create, :index, :show,:update, :destroy]
 post '/admin/login', to: 'sessions#admin_login'
 delete 'admin/logout', to: 'sessions#admin_logout'
  

<<<<<<< HEAD
  post '/auth/login', to: 'authentication#login'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
=======
>>>>>>> c85c63a04b5f9684df36f48dc84ef681b6ef1936
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
