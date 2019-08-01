Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#root'
end
