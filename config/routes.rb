Rails.application.routes.draw do
  namespace :v1, defaults: { format: :json } do
    resources :greetings, only: [:index]
  end 

  get '*page', to: 'greetings#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root "greetings#index"
end
