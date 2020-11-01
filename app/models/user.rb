class User < ApplicationRecord
  devise :database_authenticatable
  validates :name, presence: true
  validates :email, presence: true
  validates :encrypted_password, presence: true
  has_many :portfolios
end

