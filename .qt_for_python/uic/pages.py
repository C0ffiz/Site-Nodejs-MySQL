# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'pages.ui'
##
## Created by: Qt User Interface Compiler version 6.2.3
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QBrush, QColor, QConicalGradient, QCursor,
    QFont, QFontDatabase, QGradient, QIcon,
    QImage, QKeySequence, QLinearGradient, QPainter,
    QPalette, QPixmap, QRadialGradient, QTransform)
from PySide6.QtWidgets import (QApplication, QHeaderView, QLabel, QLineEdit,
    QPushButton, QSizePolicy, QStackedWidget, QTabWidget,
    QTableWidget, QTableWidgetItem, QWidget)

class Ui_StackedWidget(object):
    def setupUi(self, StackedWidget):
        if not StackedWidget.objectName():
            StackedWidget.setObjectName(u"StackedWidget")
        StackedWidget.resize(829, 557)
        self.page_1 = QWidget()
        self.page_1.setObjectName(u"page_1")
        self.page_1.setStyleSheet(u"")
        self.tabWidget = QTabWidget(self.page_1)
        self.tabWidget.setObjectName(u"tabWidget")
        self.tabWidget.setGeometry(QRect(0, 60, 831, 411))
        self.tabWidget.setStyleSheet(u"font: 16pt \"Century Gothic\";\n"
"color: rgb(0, 0, 0);")
        self.tab_3 = QWidget()
        self.tab_3.setObjectName(u"tab_3")
        self.tab_3.setStyleSheet(u"")
        self.table = QTableWidget(self.tab_3)
        if (self.table.columnCount() < 5):
            self.table.setColumnCount(5)
        __qtablewidgetitem = QTableWidgetItem()
        self.table.setHorizontalHeaderItem(0, __qtablewidgetitem)
        __qtablewidgetitem1 = QTableWidgetItem()
        self.table.setHorizontalHeaderItem(1, __qtablewidgetitem1)
        __qtablewidgetitem2 = QTableWidgetItem()
        self.table.setHorizontalHeaderItem(2, __qtablewidgetitem2)
        __qtablewidgetitem3 = QTableWidgetItem()
        self.table.setHorizontalHeaderItem(3, __qtablewidgetitem3)
        __qtablewidgetitem4 = QTableWidgetItem()
        self.table.setHorizontalHeaderItem(4, __qtablewidgetitem4)
        self.table.setObjectName(u"table")
        self.table.setGeometry(QRect(10, 70, 801, 291))
        self.table.setStyleSheet(u"font: 11pt \"Century Gothic\";\n"
"\n"
"\n"
"")
        self.label_2 = QLabel(self.tab_3)
        self.label_2.setObjectName(u"label_2")
        self.label_2.setGeometry(QRect(20, 30, 321, 31))
        self.label_2.setStyleSheet(u"")
        self.name_filter_txt = QLineEdit(self.tab_3)
        self.name_filter_txt.setObjectName(u"name_filter_txt")
        self.name_filter_txt.setGeometry(QRect(380, 30, 261, 31))
        self.name_filter_txt.setStyleSheet(u"color: rgb(0, 0, 0);\n"
"background-color: rgb(255, 255, 255);")
        self.search_btn = QPushButton(self.tab_3)
        self.search_btn.setObjectName(u"search_btn")
        self.search_btn.setGeometry(QRect(670, 20, 131, 41))
        self.search_btn.setStyleSheet(u"background-color: rgb(98, 114, 164);\n"
"color: rgb(255, 255, 255);")
        self.tabWidget.addTab(self.tab_3, "")
        self.tab = QWidget()
        self.tab.setObjectName(u"tab")
        self.label_3 = QLabel(self.tab)
        self.label_3.setObjectName(u"label_3")
        self.label_3.setGeometry(QRect(210, 75, 91, 21))
        self.label_3.setStyleSheet(u"color: rgb(255, 255, 255);")
        self.label_4 = QLabel(self.tab)
        self.label_4.setObjectName(u"label_4")
        self.label_4.setGeometry(QRect(210, 125, 91, 21))
        self.label_4.setStyleSheet(u"color: rgb(255, 255, 255);")
        self.label_5 = QLabel(self.tab)
        self.label_5.setObjectName(u"label_5")
        self.label_5.setGeometry(QRect(210, 175, 91, 21))
        self.label_5.setStyleSheet(u"color: rgb(255, 255, 255);")
        self.label_6 = QLabel(self.tab)
        self.label_6.setObjectName(u"label_6")
        self.label_6.setGeometry(QRect(210, 225, 91, 21))
        self.label_6.setStyleSheet(u"color: rgb(255, 255, 255);")
        self.le_nome = QLineEdit(self.tab)
        self.le_nome.setObjectName(u"le_nome")
        self.le_nome.setGeometry(QRect(330, 70, 231, 31))
        self.le_nome.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: rgb(255, 255, 255);")
        self.le_cpf = QLineEdit(self.tab)
        self.le_cpf.setObjectName(u"le_cpf")
        self.le_cpf.setGeometry(QRect(330, 170, 231, 31))
        self.le_cpf.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: rgb(255, 255, 255);")
        self.le_email = QLineEdit(self.tab)
        self.le_email.setObjectName(u"le_email")
        self.le_email.setGeometry(QRect(330, 120, 231, 31))
        self.le_email.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: rgb(255, 255, 255);")
        self.le_celular = QLineEdit(self.tab)
        self.le_celular.setObjectName(u"le_celular")
        self.le_celular.setGeometry(QRect(330, 220, 231, 31))
        self.le_celular.setStyleSheet(u"background-color: rgb(255, 255, 255);\n"
"color: rgb(255, 255, 255);")
        self.add_btn = QPushButton(self.tab)
        self.add_btn.setObjectName(u"add_btn")
        self.add_btn.setGeometry(QRect(270, 300, 71, 31))
        self.add_btn.setStyleSheet(u"font: 11pt \"Century Gothic\";\n"
"background-color: rgb(98, 114, 164);\n"
"color: rgb(255, 255, 255);")
        self.update_btn = QPushButton(self.tab)
        self.update_btn.setObjectName(u"update_btn")
        self.update_btn.setGeometry(QRect(370, 300, 71, 31))
        self.update_btn.setStyleSheet(u"font: 11pt \"Century Gothic\";\n"
"background-color: rgb(98, 114, 164);\n"
"color: rgb(255, 255, 255);")
        self.delete_btn = QPushButton(self.tab)
        self.delete_btn.setObjectName(u"delete_btn")
        self.delete_btn.setGeometry(QRect(470, 300, 71, 31))
        self.delete_btn.setStyleSheet(u"font: 11pt \"Century Gothic\";\n"
"background-color: rgb(98, 114, 164);\n"
"color: rgb(255, 255, 255);")
        self.tabWidget.addTab(self.tab, "")
        self.tab_2 = QWidget()
        self.tab_2.setObjectName(u"tab_2")
        self.tabWidget.addTab(self.tab_2, "")
        self.label = QLabel(self.page_1)
        self.label.setObjectName(u"label")
        self.label.setGeometry(QRect(0, 0, 831, 61))
        self.label.setStyleSheet(u"font: 75 30pt \"Century Gothic\";\n"
"color: rgb(255, 255, 255);\n"
"background-color: rgb(33, 35, 45)\n"
"")
        self.label.setAlignment(Qt.AlignCenter)
        self.refresh_btn = QPushButton(self.page_1)
        self.refresh_btn.setObjectName(u"refresh_btn")
        self.refresh_btn.setGeometry(QRect(654, 480, 151, 51))
        self.refresh_btn.setStyleSheet(u"font: 16pt \"Century Gothic\";\n"
"background-color: rgb(98, 114, 164);")
        StackedWidget.addWidget(self.page_1)
        self.page_2 = QWidget()
        self.page_2.setObjectName(u"page_2")
        StackedWidget.addWidget(self.page_2)
        self.page_3 = QWidget()
        self.page_3.setObjectName(u"page_3")
        StackedWidget.addWidget(self.page_3)

        self.retranslateUi(StackedWidget)

        self.tabWidget.setCurrentIndex(0)


        QMetaObject.connectSlotsByName(StackedWidget)
    # setupUi

    def retranslateUi(self, StackedWidget):
        StackedWidget.setWindowTitle(QCoreApplication.translate("StackedWidget", u"StackedWidget", None))
        ___qtablewidgetitem = self.table.horizontalHeaderItem(0)
        ___qtablewidgetitem.setText(QCoreApplication.translate("StackedWidget", u"ID", None));
        ___qtablewidgetitem1 = self.table.horizontalHeaderItem(1)
        ___qtablewidgetitem1.setText(QCoreApplication.translate("StackedWidget", u"Nome", None));
        ___qtablewidgetitem2 = self.table.horizontalHeaderItem(2)
        ___qtablewidgetitem2.setText(QCoreApplication.translate("StackedWidget", u"Email", None));
        ___qtablewidgetitem3 = self.table.horizontalHeaderItem(3)
        ___qtablewidgetitem3.setText(QCoreApplication.translate("StackedWidget", u"CPF", None));
        ___qtablewidgetitem4 = self.table.horizontalHeaderItem(4)
        ___qtablewidgetitem4.setText(QCoreApplication.translate("StackedWidget", u"Celular", None));
        self.label_2.setText(QCoreApplication.translate("StackedWidget", u"Digite um nome para procurar:", None))
        self.search_btn.setText(QCoreApplication.translate("StackedWidget", u"Procurar", None))
        self.tabWidget.setTabText(self.tabWidget.indexOf(self.tab_3), QCoreApplication.translate("StackedWidget", u"Tabela", None))
        self.label_3.setText(QCoreApplication.translate("StackedWidget", u"NOME", None))
        self.label_4.setText(QCoreApplication.translate("StackedWidget", u"EMAIL", None))
        self.label_5.setText(QCoreApplication.translate("StackedWidget", u"CPF", None))
        self.label_6.setText(QCoreApplication.translate("StackedWidget", u"CELULAR", None))
        self.add_btn.setText(QCoreApplication.translate("StackedWidget", u"Add", None))
        self.update_btn.setText(QCoreApplication.translate("StackedWidget", u"Update", None))
        self.delete_btn.setText(QCoreApplication.translate("StackedWidget", u"Delete", None))
        self.tabWidget.setTabText(self.tabWidget.indexOf(self.tab), QCoreApplication.translate("StackedWidget", u"Editar Tabela", None))
        self.tabWidget.setTabText(self.tabWidget.indexOf(self.tab_2), QCoreApplication.translate("StackedWidget", u"Tab 2", None))
        self.label.setText(QCoreApplication.translate("StackedWidget", u"Tabela", None))
        self.refresh_btn.setText(QCoreApplication.translate("StackedWidget", u"Atualizar", None))
    # retranslateUi

