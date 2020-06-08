class CreateOposts < ActiveRecord::Migration[6.0]
  def change
    create_table :oposts do |t|
      t.string :title
      t.text :body
      t.string :photo
      t.string :video

      t.timestamps
    end
  end
end
