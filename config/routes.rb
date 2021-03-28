Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api, defaults: { format: "json" } do
    get '/health', to: 'health#health'
    get '/search', to: 'search#search'
  end
end
