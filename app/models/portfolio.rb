class Portfolio < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :github, presence: true
  validates :url, presence: true
  validates :image, presence: true
  belongs_to :user
end
