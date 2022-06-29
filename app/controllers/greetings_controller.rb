class GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all 
    @greeting = @greetings.random
    render json @greeting
  end
end
