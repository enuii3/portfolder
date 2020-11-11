class Api::V1::PortfoliosController < ApplicationController
  def index
    @portfolios = Portfolio.all
  end

  def create
    portfolio = Portfolio.new(params_portfolio)
    if portfolio.save
      render json: portfolio
    else
      render json: portfolio.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def params_portfolio
    params.require(:portfolio).permit(:title, :description, :github, :url, :image, :user_id)
  end
end
