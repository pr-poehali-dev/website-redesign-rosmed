import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">НО</span>
              </div>
              <div>
                <div className="text-lg font-bold text-primary">НОЦ СМТ</div>
                <div className="text-xs text-muted-foreground">Союз охраны психического здоровья</div>
              </div>
            </Link>
            <div className="flex gap-8 items-center">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Направления
              </Link>
              <Link to="/about" className="text-sm font-medium text-primary">
                Лицензия
              </Link>
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Как выбрать
              </Link>
              <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full">
                Получить консультацию
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              О центре
            </h1>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <section className="mb-12">
          <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-2xl">
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">НОЦ СМТ</strong> — Научно-образовательный центр современных медицинских технологий — это образовательная площадка для психологов, психиатров, социальных работников и всех специалистов помогающих профессий.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Центр работает при поддержке Союза охраны психического здоровья и объединяет преподавателей-практиков, клиницистов и исследователей.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Мы формируем пространство, где обучение строится на научной базе, клиническом опыте и уважении к человеку.
            </p>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Наша миссия</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-shadow rounded-xl">
              <p className="text-base font-semibold text-foreground mb-2">
                Вернуть уважение к образованию
              </p>
              <p className="text-sm text-muted-foreground">
                Знания должны стать опорой, а не набором сертификатов
              </p>
            </Card>
            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-shadow rounded-xl">
              <p className="text-base font-semibold text-foreground mb-2">
                Создать профессиональную среду
              </p>
              <p className="text-sm text-muted-foreground">
                Где специалисты развиваются системно и безопасно
              </p>
            </Card>
            <Card className="p-6 bg-white border-gray-200 hover:shadow-md transition-shadow rounded-xl">
              <p className="text-base font-semibold text-foreground mb-2">
                Сохранять смысл профессии
              </p>
              <p className="text-sm text-muted-foreground">
                Этика, компетентность и человечность
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Наш подход</h2>
          <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-2xl">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" className="text-primary" size={20} />
                </div>
                <p className="text-sm text-muted-foreground flex-1 pt-2">
                  Качественное образование — это про <strong className="text-foreground">глубину</strong>, а не скорость
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Brain" className="text-primary" size={20} />
                </div>
                <p className="text-sm text-muted-foreground flex-1 pt-2">
                  В основе программ — клиническое мышление, академическая честность и практическая применимость
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" className="text-primary" size={20} />
                </div>
                <p className="text-sm text-muted-foreground flex-1 pt-2">
                  Курсы создаются с преподавателями-практиками: клиническими психологами, психиатрами, судебными экспертами
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Руководитель центра</h2>
          <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={48} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Екатерина Мальцева</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Директор Союза охраны психического здоровья и руководитель НОЦ СМТ, где обучают психологов и психотерапевтов с выдачей документов установленного образца.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Надёжность и лицензия</h2>
          <Card className="p-8 bg-gray-50 border-gray-200 shadow-sm rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="FileCheck" className="text-secondary" size={28} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Все программы НОЦ СМТ проходят по <strong className="text-foreground">лицензии на осуществление образовательной деятельности</strong>, зарегистрированной в реестре Рособрнадзора.
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  По окончании курсов слушатели получают <strong className="text-foreground">удостоверение установленного государственного образца</strong>.
                </p>
                <Button variant="link" className="text-secondary p-0 h-auto font-semibold text-sm hover:text-secondary/80">
                  Посмотреть лицензию →
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Мы создаём пространство, где:</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: 'GraduationCap', text: 'преподаватели — практики, а не теоретики' },
              { icon: 'TrendingUp', text: 'обучение — инструмент роста, а не формальность' },
              { icon: 'Lightbulb', text: 'ошибки — часть процесса, а не повод для стыда' },
              { icon: 'Handshake', text: 'коллеги — сообщество поддержки и супервизии' }
            ].map((item, index) => (
              <Card key={index} className="p-5 hover:shadow-sm transition-shadow bg-white border-gray-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <Icon name={item.icon} className="text-primary" size={20} />
                  <p className="text-sm text-foreground">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'BookMarked', title: 'Осознанное образование', desc: 'знание ради понимания' },
              { icon: 'MessageSquare', title: 'Этичная коммуникация', desc: 'уважение к людям' },
              { icon: 'Users', title: 'Профессиональная поддержка', desc: 'супервизии и сообщество' },
              { icon: 'Brain', title: 'Клиническое мышление', desc: 'основа практики' },
              { icon: 'Sprout', title: 'Развитие без выгорания', desc: 'безопасная атмосфера' }
            ].map((value, index) => (
              <Card key={index} className="p-5 hover:shadow-sm transition-colors bg-white border-gray-200 rounded-xl">
                <div className="mb-3">
                  <Icon name={value.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-base font-semibold mb-1 text-foreground">{value.title}</h3>
                <p className="text-xs text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Открыты для сотрудничества</h2>
          <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-2xl">
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Центр сотрудничает с вузами, профессиональными ассоциациями и организациями, развивающими систему психического здоровья в России.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Наша цель — объединять специалистов ради качественной помощи людям
            </p>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Контакты</h2>
          <Card className="p-8 bg-white border-gray-200 shadow-sm rounded-2xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-primary" size={20} />
                <a href="mailto:info@rosmededucation.ru" className="text-sm text-foreground hover:text-primary transition-colors">
                  info@rosmededucation.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Globe" className="text-primary" size={20} />
                <a href="https://rosmededucation.ru" className="text-sm text-foreground hover:text-primary transition-colors">
                  rosmededucation.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-primary" size={20} />
                <span className="text-sm text-foreground">+7 (XXX) XXX-XX-XX</span>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 НОЦ СМТ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
