class CreateYposts < ActiveRecord::Migration[6.0]
  def change
    create_table :yposts do |t|
      t.string :title
      t.text :body
      t.string :photo
      t.string :video

      t.timestamps
    end
  end
end
