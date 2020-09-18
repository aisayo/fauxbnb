class CreatePostings < ActiveRecord::Migration[6.0]
  def change
    create_table :postings do |t|
      t.string :title
      t.text :description
      t.integer :price
      t.date :availability
      t.timestamps
    end
  end
end
