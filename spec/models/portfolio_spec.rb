require 'rails_helper'

RSpec.describe Portfolio, type: :model do
  let(:portfolio) { FactoryBot.create(:portfolio) }

  it 'is valid with title, description, github and url' do
    expect(portfolio).to be_valid
  end

  it 'is invalid without title' do
    portfolio.update(title: nil)
    expect(portfolio).to be_invalid
  end

  it 'is invalid without description' do
    portfolio.update(description: nil)
    expect(portfolio).to be_invalid
  end

  it 'is invalid without github' do
    portfolio.update(github: nil)
    expect(portfolio).to be_invalid
  end

  it 'is invalid without url' do
    portfolio.update(url: nil)
    expect(portfolio).to be_invalid
  end
end
