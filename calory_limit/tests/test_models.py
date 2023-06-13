from django.test import TestCase
from users.models import User
from ..models import CaloryLimit

class CaloryLimitModelTest(TestCase):
    def setUp(self):
        # Create a user for the test
        self.user = User.objects.create(email='testuser@gmail.com')

    def test_calory_limit_creation(self):
        # Create a CaloryLimit object
        calory_limit = CaloryLimit.objects.create(
            calory_limit=2000,
            description='Sample description',
            user=self.user,
            exceeded_maximum=False,
            present_calory_amount=1500
        )

        # Assert that the object is created successfully
        self.assertIsInstance(calory_limit, CaloryLimit)
        self.assertEqual(calory_limit.calory_limit, 2000)
        self.assertEqual(calory_limit.description, 'Sample description')
        self.assertEqual(calory_limit.user, self.user)
        self.assertFalse(calory_limit.exceeded_maximum)
        self.assertEqual(calory_limit.present_calory_amount, 1500)
from django.test import TestCase
from ..models import User
from django.db.utils import IntegrityError

class UserModelTest(TestCase):
    def test_user_creation(self):
        user = User.objects.create(
            email='test@example.com',
            first_name='Test',
            last_name='User',
            role='Regular'
        )
        user.set_password('testpassword')
        user.save()

        self.assertIsInstance(user, User)
        self.assertEqual(user.email, 'test@example.com')
        self.assertEqual(user.first_name, 'Test')
        self.assertEqual(user.last_name, 'User')
        self.assertEqual(user.role, 'Regular')

        # Test password hashing
        self.assertTrue(user.check_password('testpassword'))

    def test_user_uniqueness(self):
        User.objects.create(
            email='existing@example.com',
            first_name='Existing',
            last_name='User',
            role='Regular'
        )

        # Attempt to create a user with the same email
        with self.assertRaises(IntegrityError):
            User.objects.create(
                email='existing@example.com',
                first_name='Duplicate',
                last_name='User',
                role='Regular'
            )

