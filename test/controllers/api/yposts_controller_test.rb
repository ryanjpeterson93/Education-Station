require 'test_helper'

class Api::YpostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_yposts_index_url
    assert_response :success
  end

  test "should get show" do
    get api_yposts_show_url
    assert_response :success
  end

  test "should get update" do
    get api_yposts_update_url
    assert_response :success
  end

  test "should get create" do
    get api_yposts_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_yposts_destroy_url
    assert_response :success
  end

end
