class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :github, null: false
      t.text :url, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
