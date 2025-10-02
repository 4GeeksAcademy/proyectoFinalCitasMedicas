"""Aumentar tamaño del password a 300 para hash

Revision ID: 43cb34c8998a
Revises: a1d62a9d28b9
Create Date: 2025-10-02 18:11:37.132984

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '43cb34c8998a'
down_revision = 'a1d62a9d28b9'
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column('user', 'password',
                    type_=sa.String(length=300),
                    existing_type=sa.String(),
                    existing_nullable=False)


def downgrade():
    op.alter_column('user', 'password',
                    type_=sa.String(),
                    existing_type=sa.String(length=300),
                    existing_nullable=False)
