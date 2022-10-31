Rails.application.routes.draw do
  
  
  resources :stores, only: [:create, :index,:show, :update, :destroy]
  resources :requested_items
  resources :items


 # merchant/user sign in routes

 resources :users
 post "/signup",  to: "users#create"
 post '/auth/login', to: 'authentication#login'


  # clerk sign in routes

  resources :clerks, only: [:index, :show, :create, :update, :destroy ]
  post '/clerk/login', to: 'sessions#clerk_login'
  delete 'clerk/logout', to: 'sessions#clerk_logout'

  
 # admin sign in routes

 resources :admins, only: [:create, :index, :show,:update, :destroy]
 post '/admin/login', to: 'sessions#admin_login'
 delete 'admin/logout', to: 'sessions#admin_logout'
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
