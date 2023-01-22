def run():
    @app.route('/admin')
    def admin():
        return "Admin Acesscess"