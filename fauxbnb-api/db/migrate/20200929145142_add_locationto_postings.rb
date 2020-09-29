class AddLocationtoPostings < ActiveRecord::Migration[6.0]
  def change
    add_column :postings, :location, :string
  end
end
