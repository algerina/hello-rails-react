Rails.application.routes.draw do
  namespace :v1 do
    get 'greetings/index'
  end
  namespace :v1, defaults: {format: 'json'} do
    get 'greetings', to: 'greetings#index'
  end

end
