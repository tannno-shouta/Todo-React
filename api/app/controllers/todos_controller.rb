class TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def new 
    @todos = Todo.new
  end
end
