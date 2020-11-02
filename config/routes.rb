Rails.application.routes.draw do
  root 'home#index'
  devise_for :users

  namespace :api, { format: 'json' } do
    namespace :v1 do
      resources :portfolios, only: [:index]
    end
  end
end

