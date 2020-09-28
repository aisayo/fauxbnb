class AddImgToPostings < ActiveRecord::Migration[6.0]
  def change
    add_column :postings, :img, :string
  end
end
