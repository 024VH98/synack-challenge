Rails.application.routes.draw do
  root 'homepage#index'
  get '/health', to: 'health#health'
end
