class AddColumnToPortfolio < ActiveRecord::Migration[6.0]
  def change
    add_column :portfolios, :image, :text, null: false
  end
end