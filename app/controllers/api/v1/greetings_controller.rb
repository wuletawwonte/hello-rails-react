class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all
    render json: @greeting
  end
end