class V1::GreetingsController < ApplicationController
  def index
    render json: {
       :greetings => [
         {
           :message => 'Hello'
         }
       ]
      }.to_json
  end
end
