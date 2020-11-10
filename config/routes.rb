Rails.application.routes.draw do
  root 'home#index'
  devise_for :users

  resources 'users', to: 'home#index'
  resources :portfolios, to: 'home#index'

  namespace :api, { format: 'json' } do
    namespace :v1 do
      resources :users, only: [:show]
      resources :portfolios, only: [:index]
    end
  end
end

