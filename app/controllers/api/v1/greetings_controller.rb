class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all.sample
    respond_to do |format|
      format.json { render json: @greetings }
    end
  end
end
